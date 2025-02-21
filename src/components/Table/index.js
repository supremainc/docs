export function Table({ children }) {
  return (
    <div className="overflow-x">
      <table>
        {children}
      </table>
    </div>
  )
}

export function Thead({ children }) {
  return (
    <thead>
      <tr>
        {children}
      </tr>
    </thead>
  )
}

export function Th({ children, colspan }) {
  return (
    <th
      {...(colspan && {colspan: colspan})}
    >{children}</th>
  )
}

export function Tbody({children}) {
  return (
    <tbody>
      {children}
    </tbody>
  )
}

export function Row({children}) {
  return (
    <tr>
      {children}
    </tr>
  )
}

export function Td({children, rowspan}) {
  return (
    <td 
      {...(rowspan && {rowspan: rowspan})}>
      {children}
    </td>
  )
}
