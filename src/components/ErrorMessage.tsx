export const ErrorMessage = (
    { message }: { message: string | null | undefined }
) => {
    return (
        <strong>
                {message}
        </strong>
    )
}