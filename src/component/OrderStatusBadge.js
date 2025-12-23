export default function OrderStatusBadge({ status }) {
    const styles = {
        pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        processing: 'bg-blue-100 text-blue-800 border-blue-200',
        shipped: 'bg-indigo-100 text-indigo-800 border-indigo-200',
        delivered: 'bg-green-100 text-green-800 border-green-200',
        cancelled: 'bg-red-100 text-red-800 border-red-200',
    };
    const labels = {
        pending: 'Menunggu',
        processing: 'Diproses',
        shipped: 'Dikirim',
        delivered: 'Selesai',
        cancelled: 'Dibatalkan',
    };
    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}
        >
            {labels[status]}
        </span>
    );
}
