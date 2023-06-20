"use client";
import Image from "next/image";
import styles from "./login.module.css";
import Logo from "../assets/logo.png";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "../components";
import { useRouter } from "next/navigation";
import { ProgressSpinner } from "primereact/progressspinner";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { email: "", password: "" } });

  const onSubmit = handleSubmit((data: FormData) => {
    setLoading(true);
    setTimeout(() => {
      router.push("/home");
      setLoading(false);
    }, 3000);
  });

  if (loading) {
    return (
      <main className={styles.main}>
        <ProgressSpinner />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <Image src={Logo} alt="wewe" width={100} height={50} />

        <form onSubmit={onSubmit} className={styles.login}>
          <Input
            control={control}
            name="email"
            errors={errors}
            icon="pi pi-user"
            classIcon="p-input-icon-right"
            placeholder="e-mail"
            message="E-mail obrigatório"
          />

          <Input
            control={control}
            name="password"
            errors={errors}
            data-lpignore="true"
            icon={`pi pi-eye${!visible ? "-slash" : ""}`}
            classIcon="p-input-icon-right"
            placeholder="Senha"
            message="Senha obrigatória"
            clickIcon={() => setVisible(!visible)}
            type={`${!visible ? "password" : "text"}`}
          />

          <Button label="LOGIN" outlined type="submit" />
        </form>
      </div>
    </main>
  );
}
