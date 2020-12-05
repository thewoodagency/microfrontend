import { mount } from 'marketing/MarketingIndex';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    //mount(document.querySelector('#prod-marketing'));
    useEffect(() => {
        mount(ref.current);
    });
    
    return <div ref={ref} />;
}
