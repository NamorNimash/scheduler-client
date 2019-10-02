import React from "react";

import { HTMLTable } from "@blueprintjs/core";

const mainTable = () => {
  return (
    <HTMLTable bordered>
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
          <td>Проект1</td>
          <td>Название первой задачи</td>
          <td />
          <td>Остановлена</td>
          <td>Запустить</td>
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
