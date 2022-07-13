import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCinema } from '../slices/cinemaSlice';
import { Radio, Space, Tabs } from 'antd';

const { TabPane } = Tabs;
const Cinema = () => {
  const { data, isLoading, error } = useSelector(state => state.cinema);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinema())
  }, []);

  const [tabPosition, setTabPosition] = useState('left');

  // const changeTabPosition = (e) => {
  //   setTabPosition(e.target.value);
  // };

  return (
    <>
      <Space
        style={{
          marginBottom: 24,
        }}
      >
        Tab position:
        <Radio.Group value={tabPosition} >
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs tabPosition={tabPosition}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab 3
        </TabPane>
      </Tabs>
    </>
  );
}

export default Cinema