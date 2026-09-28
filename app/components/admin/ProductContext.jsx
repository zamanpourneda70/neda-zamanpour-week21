import { createContext, useContext, useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";

import Modal from "./Modal";
import Alert from "./Alert";

import {
  addProduct,
  deleteProduct,
  editProduct,
} from "../../services/admin.js";

const ProductContext = createContext(null);

const emptyProduct = {
  id: "",
  name: "",
  quantity: "",
  price: "",
};

const STORAGE_KEY = "products-app";

const loadProductsFromStorage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return [];

    const parsed = JSON.parse(saved);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter((item) => item && typeof item === "object" && item.id);
  } catch (error) {
    console.error("خطا در خواندن محصولات:", error);
    return [];
  }
};

export function ProductProvider({ children }) {
  const [product, setProduct] = useState(emptyProduct);
  const [products, setProducts] = useState(loadProductsFromStorage);

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [alert, setAlert] = useState("");
  const [editId, setEditId] = useState(null);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: "",
    message: "",
    onConfirm: () => {},
  });

  // ADD PRODUCT

  const { mutate, isLoading, error } = useMutation({
    mutationFn: addProduct,

    onSuccess: (newProduct) => {
      console.log("محصول از سرور:", newProduct);
      console.log("ID محصول:", newProduct?.id);

      if (!newProduct || !newProduct.id) {
        console.error("پاسخ نامعتبر از سرور:", newProduct);
        setAlert("پاسخ سرور نامعتبر است.");
        return;
      }

      setProducts((prev) => {
        const updatedProducts = [...prev, newProduct];

        console.log("products بعد از افزودن:", updatedProducts);

        return updatedProducts;
      });

      setAlert("محصول با موفقیت اضافه شد!");

      closeHandler();

      setTimeout(() => {
        setAlert("");
      }, 3000);
    },

    onError: (err) => {
      console.error("خطا در ثبت محصول:", err);
      setAlert("خطا در ثبت محصول در سرور!");
    },
  });

  // SAVE PRODUCTS

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  // FILTER

  const filteredContacts = products
    .filter((item) => item && typeof item === "object" && item.id)
    .filter((item) => {
      const search = searchProduct.trim().toLowerCase();

      if (!search) return true;

      return (
        (item.name || "").toString().toLowerCase().includes(search) ||
        (item.quantity || "").toString().includes(search) ||
        (item.price || "").toString().includes(search)
      );
    });

  // FORM

  const resetContactForm = () => {
    setProduct(emptyProduct);
    setEditId(null);
    setAlert("");
  };

  const openAddContactHandler = () => {
    resetContactForm();
    setShowAddProduct(true);
  };

  const closeHandler = () => {
    setShowAddProduct(false);
    setEditId(null);

    setProduct({
      id: "",
      name: "",
      quantity: "",
      price: "",
    });
  };

  // ADD / EDIT

  const addHandler = async (data) => {
    if (editId) {
      try {
        const updatedProduct = await editProduct(editId, data);
        setProducts((prev) =>
          prev.map((item) => (item?.id === editId ? updatedProduct : item)),
        );
        setAlert("محصول با موفقیت ویرایش شد!");
        closeHandler();
      } catch (error) {
        console.error("❌ خطا در ویرایش محصول:", error);
        setAlert("ویرایش محصول با خطا مواجه شد.");
      }
      return;
    }
    mutate(data);
  };

  // DELETE MODAL

  const openDeleteModal = (title, onConfirm) => {
    setModalConfig({
      isOpen: true,
      title,
      onConfirm,
    });
  };

  const closeDeleteModal = () => {
    setModalConfig((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  // DELETE PRODUCT

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,

  
    onSuccess: (_data, id) => {
      console.log("محصول حذف شد:", id);

      setProducts((prev) => prev.filter((item) => item?.id !== id));

      setSelectedContacts((prev) => prev.filter((itemId) => itemId !== id));

      closeDeleteModal();

      setAlert("محصول با موفقیت حذف شد.");

      setTimeout(() => {
        setAlert("");
      }, 3000);
    },

    onError: (error) => {
      console.error("خطا در حذف محصول:", error);

      setAlert("حذف محصول با خطا مواجه شد.");
    },
  });

  const deleteHandler = (id) => {
    console.log("ID برای حذف:", id);

    openDeleteModal("آیا از حذف این محصول مطمئنید؟", () => {
      deleteMutation.mutate(id);
    });
  };

  // EDIT

  const editContactHandler = (id) => {
    const contactToEdit = products.find((item) => item?.id === id);

    if (!contactToEdit) return;

    setProduct(contactToEdit);
    setEditId(id);
    setAlert("");
    setShowAddProduct(true);
  };

  // VALUE

  const value = {
    product,
    products,
    filteredContacts,

    showAddProduct,
    alert,
    editId,

    selectedContacts,

    searchProduct,

    modalConfig,

    isLoading,
    error,

    deleteHandler,
    closeDeleteModal,

    setSearchProduct,
    addHandler,
    setAlert,

    closeHandler,
    openAddContactHandler,
    editContactHandler,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}

      <Modal
        isOpen={modalConfig.isOpen}
        title={modalConfig.title}
        message={modalConfig.message}
        onConfirm={modalConfig.onConfirm}
        onCancel={closeDeleteModal}
      />

      <Alert message={alert} />
    </ProductContext.Provider>
  );
}

export const useContacts = () => useContext(ProductContext);
