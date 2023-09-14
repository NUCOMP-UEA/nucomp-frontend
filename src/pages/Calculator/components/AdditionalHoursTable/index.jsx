import { useMemo, useState } from "react";
import { AdditionalHeader, Container, TableHeader } from "./styles";
import * as Icon from "../icons";
import { ButtonCheckHeader } from "./ButtonCheck";
import { Row } from "./Row";
import { rowsMock } from "../../constants/Rows";
import { AdditionalSearch } from "./AdditionalSearch";
import { Pagination } from "../Pagination";
import { CreateActivityModal } from "../CreateActivityModal";

export const AdditionalHoursTable = () => {
  const [allTableChecked, setAllTableChecked] = useState(false);
  const [showCreateActivityModal, setShowCreateActivityModal] = useState(false);

  const [rows, setRows] = useState(rowsMock);

  const atLeastOneRowSelected = useMemo(() => {
    return rows.some((row) => row.isChecked);
  }, [rows]);

  function onCheckRow(index = 0, payload = false) {
    setRows((old) =>
      old.map((e, i) => {
        if (i === index) {
          e.isChecked = payload;
        }
        return e;
      })
    );
  }
  function onSelectAllTable(payload = false) {
    setAllTableChecked(payload);
    setRows((old) =>
      old.map((e) => {
        return { ...e, isChecked: payload };
      })
    );
  }

  function onSubmit(payload = {activity: "",
  institution: "",
  category: "",
  acting: "",
  date: new Date(),
  chDone: 0,
  file: new File()}) {
    console.log(payload)
    setShowCreateActivityModal(false)
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
        <span className="trash">
          {(allTableChecked || atLeastOneRowSelected) && <Icon.Trash />}
        </span>
      </TableHeader>
      <Row rows={rows} onClickCheck={onCheckRow} />
      <Pagination firstItem={1} lastItem={10} totalItems={230} />
      {showCreateActivityModal ? (
        <CreateActivityModal
          onClose={() => setShowCreateActivityModal(false)}
          onSubmit={onSubmit}
        />
      ) : null}
    </Container>
  );
};
