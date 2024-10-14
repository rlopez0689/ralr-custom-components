import './MyLabel.css'

interface Props {
    /**
     * Text to display
     */
    label: string;
    /**
     * Label size
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Display all text capitalize
     */
    allCaps?: boolean;
    /**
    * Color select
    */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    /**
    * Font color 
    */
    fontColor?: string;
}

export function MyLabel({ label, size = 'normal', allCaps, color, fontColor }: Props) {
    return (
        <span style={{ color: fontColor }} className={[size, color].join(' ')}>{allCaps ? label.toUpperCase() : label}</span>
    )
}

