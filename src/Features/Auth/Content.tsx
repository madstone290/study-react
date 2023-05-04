import React from 'react';
import { DatePicker } from 'antd';

export const Content = ({ text }: { text: string }) => {
    return (
        <div>
            <p>{text}</p>
            <p>컨텐츠 페이지입니다</p>
        </div>


    );
};