import React, { useEffect, useState } from "react";
import { Row, Col, Table, Typography, Modal, Form, Input, Button, message } from "antd";
// Firebase
import app from "../../firebaseConfig";
import { getDatabase, ref, get, set, remove, push } from "firebase/database";

const { Title } = Typography;

export default function Anggota() {
  const [anggota, setAnggota] = useState([]);
  const [load, setLoad] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInsertModalOpen, setIsInsertModalOpen] = useState(false);
  const [selectedAnggota, setSelectedAnggota] = useState(null);
  const [form] = Form.useForm();
  const [insertForm] = Form.useForm();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoad(true);

        const db = getDatabase(app);
        const dbRef = ref(db, "users");
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          const dataAnggota = snapshot.val();

          // Ubah data menjadi array
          const formattedData = Object.keys(dataAnggota).map((key) => ({
            key, // Key unique dari firebase
            ...dataAnggota[key],
          }));

          setAnggota(formattedData);
        } else {
          console.log("No Data Available");
        }
      } catch (error) {
        console.error("Error Fetching Data Users:", error);
      } finally {
        setLoad(false);
      }
    };
    fetchUser();
  }, []);

  // Menampilkan modal detail
  const handleRowClick = (record) => {
    setSelectedAnggota(record); // Simpan data anggota yang diklik
    form.setFieldsValue(record); // Isi form dengan data anggota
    setIsModalOpen(true); // Buka modal
  };

  // Fungsi untuk update data
  const handleUpdate = async (values) => {
    try {
      const db = getDatabase(app);
      const anggotaRef = ref(db, `users/${selectedAnggota.key}`);

      // Perbarui data di Firebase
      await set(anggotaRef, values);
      message.success("Data anggota berhasil diperbarui!");

      // Perbarui data di tabel
      setAnggota((prev) =>
        prev.map((item) =>
          item.key === selectedAnggota.key ? { ...item, ...values } : item
        )
      );

      setIsModalOpen(false); // Tutup modal
    } catch (error) {
      console.error("Error updating data:", error);
      message.error("Gagal memperbarui data anggota.");
    }
  };

  // Fungsi untuk delete data
  const handleDelete = async () => {
    try {
      const db = getDatabase(app);
      const anggotaRef = ref(db, `users/${selectedAnggota.key}`);

      // Hapus data dari Firebase
      await remove(anggotaRef);
      message.success("Data anggota berhasil dihapus!");

      // Hapus data dari tabel
      setAnggota((prev) =>
        prev.filter((item) => item.key !== selectedAnggota.key)
      );

      setIsModalOpen(false); // Tutup modal
    } catch (error) {
      console.error("Error deleting data:", error);
      message.error("Gagal menghapus data anggota.");
    }
  };

  // Fungsi untuk insert data
  const handleInsert = async (values) => {
    try {
      const db = getDatabase(app);
      const anggotaRef = ref(db, "users");

      // Generate role, username, and password
      const role = 'anggota';
      const username = values.name.toLowerCase().replace(/\s+/g, ""); // username dari nama
      const password = '123'; // default password

      const newAnggota = {
        name:values.name,
        role,
        username,
        password,
      };

      // Tambahkan data baru ke Firebase
      const newAnggotaRef = push(anggotaRef);
      await set(newAnggotaRef, newAnggota);
      message.success("Data anggota berhasil ditambahkan!");

      // Tambahkan data baru ke tabel
      setAnggota((prev) => [
        ...prev,
        { key: newAnggotaRef.key, ...newAnggota },
      ]);

      insertForm.resetFields(); // Reset form
      setIsInsertModalOpen(false); // Tutup modal insert
    } catch (error) {
      console.error("Error inserting data:", error);
      message.error("Gagal menambahkan data anggota.");
    }
  };

  return (
    <>
      <Row align="middle" justify="space-between" style={{ marginBottom: 20 }}>
        <Col>
          <Title level={2} style={{ lineHeight: "1.3em", color: "white", margin: 0 }}>
            List Anggota
          </Title>
        </Col>
        <Col>
          <Button type="primary" onClick={() => setIsInsertModalOpen(true)}>
            Tambah Anggota
          </Button>
        </Col>
      </Row>

      {/* Modal Insert */}
      <Modal
        title="Tambah Anggota"
        open={isInsertModalOpen}
        onCancel={() => setIsInsertModalOpen(false)}
        footer={null}
      >
        <Form
          form={insertForm}
          layout="vertical"
          onFinish={handleInsert}
        >
          <Form.Item
            label="Nama Anggota"
            name="name"
            rules={[{ required: true, message: "Nama anggota tidak boleh kosong!" }]}
          >
            <Input placeholder="Masukkan nama anggota" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Tambah
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal Detail */}
      <Modal
        title="Detail Anggota"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdate}
        >
          <Form.Item
            label="Nama Anggota"
            name="name"
            rules={[{ required: true, message: "Nama anggota tidak boleh kosong!" }]}
          >
            <Input placeholder="Masukkan nama anggota" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Update
            </Button>
          </Form.Item>
        </Form>
        <Button
          type="primary"
          danger
          block
          onClick={handleDelete}
          style={{ marginTop: 10 }}
        >
          Delete
        </Button>
      </Modal>

      {load ? (
        <p style={{ color: "white" }}>Tunggu...</p>
      ) : (
        <Table
          columns={[
            {
              title: "Anggota",
              dataIndex: "name",
              key: "name",
            },
          ]}
          dataSource={anggota}
          scroll={{ x: "max-content" }}
          onRow={(record) => ({
            onClick: () => handleRowClick(record), // Tambahkan event klik pada row
          })}
        />
      )}
    </>
  );
}
