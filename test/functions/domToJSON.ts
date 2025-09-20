export function domToJSON(element: HTMLElement | null): any {
    if (!element) return null;

    const props: Record<string, any> = {};

    // Mantener className aunque sea undefined
    props.className = element.className || undefined;

    // Agregar style si existe
    const style = element.getAttribute('style');
    if (style) props.style = style;

    // Agregar atributos relevantes para img
    if (element.tagName.toLowerCase() === 'img') {
        props.src = element.getAttribute('src') || undefined;
        props.alt = element.getAttribute('alt') || undefined;
    }

    // Procesar hijos
    const children = Array.from(element.childNodes)
        .map((child) =>
            child.nodeType === Node.TEXT_NODE ? child.textContent : domToJSON(child as HTMLElement)
        )
        .filter(Boolean); // elimina null o strings vacíos

    if (children.length) props.children = children;

    return {
        type: element.tagName.toLowerCase(),
        props,
        children,
    };
}
