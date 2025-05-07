export function Table({ children, className }) {
  return (
    <div className='overflow-x'>
      <table 
        {...(className && {className: className})}>
        {children}
      </table>
    </div>
  )
}

export function Thead({ children }) {
  return (
    <thead>
        {children}
    </thead>
  )
}

export function Th({ children, colspan, rowspan }) {
  return (
    <th
      {...(colspan && {colspan: colspan})}
      {...(rowspan && {rowspan: rowspan})}
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

export function Row({children, className}) {
  return (
    <tr className={className}>
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
