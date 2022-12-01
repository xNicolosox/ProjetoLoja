import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  InputGroup,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

export default function ItemTable(props) {
  if (!props.data) return <> Sem itens cadastrados</>;
  return (
    <Table>
      <thead>
        <tr>
          {props.header.map((e) => (
            <th key={e}>{e}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((e) => (
          <tr key={e.id}>
            {Object.keys(e).map((i) =>
              i !== "id" ? (
                <td key={i}>
                  {i !== "image" ? (
                    e[i]
                  ) : (
                    <Image src={e[i]} height={40} width={40} />
                  )}
                </td>
              ) : (
                ""
              )
            )}
            <th>
              <Icon.PenFill color="green" />
              {props.detailLink ? (
                <Link href={`${props.detailLink}/${e.id}`}>
                  <Icon.EyeFill />
                </Link>
              ) : (
                ""
              )}
            </th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
