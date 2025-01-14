import Items from "../../pages/Items";
import RequireAuth from "../common/RequireAuth";
import "./AdminLayout.css";
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <RequireAuth>
      <div className='layout-container'>
        <AdminNavbar />
        <div className='inner-layout'>
          <Sidebar />

          {children}
        </div>
      </div>
    </RequireAuth>
  );
};

export default AdminLayout;
