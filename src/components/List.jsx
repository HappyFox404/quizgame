import React from 'react'

export default function List({ children, style, isVertical }) {
    
    let styles;

    if (isVertical) {
        styles = {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            ...style
        };
    } else { 
        styles = {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            ...style
        };
    }

    return (
        <div style={styles}>
            {children}
        </div>
    )
}

List.defaultProps = { isVertical: true };