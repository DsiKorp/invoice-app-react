interface Props {
    total: number | undefined;
}


export const TotalView = ({ total = 0 }: Props) => {

    return (
        <>
            <div className="text-end">
                <span className="badge bg-success">{total}</span>
            </div>
        </>
    )
}