export function useDocumentTitle(title) {

    document.title = title;

    return (title) => {
        document.title = title;
    }
}