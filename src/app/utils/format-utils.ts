export const formatPhone = (value: string): string => {
    if (!value) return ''
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 10) {
        return digits
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(-\d{4})(\d+?)/, '$1');
    }
    return digits
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})(\d+?)/, '$1');
};

export const unmaskPhone = (value: string): string => value.replace(/\D/g, '');
