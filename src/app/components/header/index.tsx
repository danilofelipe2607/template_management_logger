import styles from "./header.module.css";
import { TabMenu } from "primereact/tabmenu";

const items = [
  { label: "Home", icon: "pi pi-fw pi-home" },
  { label: "STATUS", icon: "pi pi-fw pi-calendar" },
];

export default function Header() {
  return (
    <header className={styles.container}>
      <TabMenu model={items} style={{ width: "100%", borderRadius: "10px" }} />
    </header>
  );
}
