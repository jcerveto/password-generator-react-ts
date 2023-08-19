export const Error = (
    { message }: { message: string | null | undefined }
) => {
    return (
        <strong>
                {message}
        </strong>
    )
}