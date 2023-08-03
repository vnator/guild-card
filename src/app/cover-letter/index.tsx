
export const CoverLetter = (props: any) => {

    return (
        <div>
            Cover Letter
            <div>{props.header}</div>
            <div>{props.content}</div>
            <div>{props.footer}</div>
        </div>
    )
}