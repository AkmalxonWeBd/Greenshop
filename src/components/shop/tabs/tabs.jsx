import React from 'react';
import { Tabs } from 'antd';
import TabsCall from './tabsCall';
import ShoppingCard from '../shopCard/shoppingCard';
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'Shop',
        children: <TabsCall />,
    },
    {
        key: '2',
        label: 'Shopping Card',
        children: <ShoppingCard />
    },
    {
        key: '3',
        label: 'Checkut',
        children: <ShoppingCard />,
    },
];
const App = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default App;