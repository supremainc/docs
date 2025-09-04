export default function Badge({ children, only }) {
    return (
        <span className={`badge ${only ? 'only' : ''}`}>{children}</span>
    )
}