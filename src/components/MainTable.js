import React from "react";

import { HTMLTable } from "@blueprintjs/core";

const mainTable = () => {
  return (
    <HTMLTable bordered interactive striped>
      <thead>
        <tr>
          <th>Проект</th>
          <th>Название задачи</th>
          <th>План исполнения</th>
          <th>Статус</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Create Task</td>
        </tr>
        <tr>
          <td>Проект2</td>
          <td>Название второй задачи</td>
          <td />
          <td>Остановлена</td>
          <td>Запустить</td>
        </tr>
      </tbody>
    </HTMLTable>
  );
};

export default mainTable;
