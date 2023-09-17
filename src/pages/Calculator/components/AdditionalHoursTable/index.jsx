import { useMemo, useState } from "react";
import { AdditionalHeader, Container, TableHeader } from "./styles";
import * as Icon from "../icons";
import { ButtonCheckHeader } from "./ButtonCheck";
import { Row } from "./Row";
import { AdditionalSearch } from "./AdditionalSearch";
import { Pagination } from "../Pagination";
import { CreateActivityModal } from "../CreateActivityModal";
import { useCalculator } from "../../contexts/Calculator";
import { DeleteActivityModal } from "../DeleteActivityModal";
import { ToastUtils } from "../../../../utils/Toast.utils.js";

export const AdditionalHoursTable = () => {
  const {
    activities,
    allTableChecked,
    onSelectAllTable,
    onCheckRow,
    postActicity,
    fetchActivities,
    deleteActivities,
  } = useCalculator();

  const [showCreateActivityModal, setShowCreateActivityModal] = useState(false);
  const [showDeleteActivityModal, setShowDeleteActivityModal] = useState(false);

  const atLeastOneRowSelected = useMemo(() => {
    return activities.some((row) => row.isChecked);
  }, [activities]);

  async function onSubmit(
    payload = {
      activity: "",
      institution: "",
      category: "",
      acting: "",
      date: "",
      chDone: 0,
      file: new File(),
    }
  ) {
    try {
      await postActicity(payload);
      ToastUtils.success("Atividade adicionada com sucesso");
      await fetchActivities();
    } catch (err) {
      ToastUtils.error("Não foi possível salvar a atividade");
    }
    setShowCreateActivityModal(false);
  }

  async function onDelete() {
    const selectedActivities = activities.filter(
      (activity) => activity.isChecked
    );
    await deleteActivities(selectedActivities);
    await fetchActivities();
    setShowDeleteActivityModal(false);
  }

  return (
    <Container>
      <AdditionalHeader>
        <AdditionalSearch />
        <button
          className="plus-activity"
          onClick={() => setShowCreateActivityModal(true)}
        >
          + Atividade
        </button>
      </AdditionalHeader>
      <TableHeader selected={allTableChecked}>
        <div className="selected"></div>
        <ButtonCheckHeader
          isChecked={allTableChecked}
          setIsChecked={onSelectAllTable}
        />
        <span className="head">atividade</span>
        <span className="head">Instituição</span>
        <span className="head">Categoria</span>
        <span className="head">Atuação</span>
        <span className="head">Data</span>
        <span className="head">CH Cumprida</span>
        <span className="head">CH a lançar</span>
        <span
          className="trash"
          onClick={() => setShowDeleteActivityModal(true)}
        >
          {(allTableChecked || atLeastOneRowSelected) && <Icon.Trash />}
        </span>
      </TableHeader>
      <Row rows={activities} onClickCheck={onCheckRow} />
      <Pagination />
      {showCreateActivityModal ? (
        <CreateActivityModal
          onClose={() => setShowCreateActivityModal(false)}
          onSubmit={onSubmit}
        />
      ) : null}
      {showDeleteActivityModal ? (
        <DeleteActivityModal
          onClose={() => setShowDeleteActivityModal(false)}
          onDelete={onDelete}
        />
      ) : null}
    </Container>
  );
};
