import { Button } from "primereact/button";
import styles from "./filter.module.css";
import { Dropdown } from "primereact/dropdown";
import Input from "../Input";
import { Controller, useForm } from "react-hook-form";
import { Calendar } from "primereact/calendar";
import { mockStatus } from "../../mock";

interface FilterData {
  term: string;
  period: string;
  status: string;
}

export default function Filter() {
  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<FilterData>({
    defaultValues: { term: "", period: "", status: "" },
  });

  const onSubmit = handleSubmit((data: FilterData) => console.log(data));

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <div className={styles.containerInput}>
        <span className={styles.labelFilter}> Filtro</span>
        <Input
          placeholder="Digite o termo de busca"
          control={control}
          errors={errors}
          name="term"
        />
      </div>

      <div className={styles.containerInputDate}>
        <Controller
          name="period"
          control={control}
          render={({ field }) => (
            <>
              <span className={styles.labelFilter}> Período</span>
              <Calendar
                value={field.value}
                selectionMode="range"
                style={{ width: "100%" }}
                readOnlyInput
                onChange={field.onChange}
              />
            </>
          )}
        />
      </div>

      <div className={styles.containerSelect}>
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Dropdown
              value={field.value}
              options={mockStatus}
              id={field.name}
              optionLabel="name"
              onChange={(e) => field.onChange(e.value)}
              placeholder="Status"
            />
          )}
        />
      </div>
      <Button
        label="Filtrar"
        outlined
        type="submit"
        style={{ width: "200px" }}
      />
    </form>
  );
}
