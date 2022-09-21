/*
 * @Author: wayne
 * @Date: 2022-09-20 17:11:34
 * @LastEditors: wayne
 * @LastEditTime: 2022-09-21 11:50:13
 */
import { Collapse } from 'antd';
import FileList from './FileList';
import FileListSetting from './FileList/FileListSetting';
import LabelList from './LabelList';
import LabelListSetting from './LabelList/LabelListSetting';
import { useStoreContext } from '../../contexts/StoreContext';

const { Panel } = Collapse;

function RightToolbar() {
  const { state } = useStoreContext();
  const {
    imageFiles, selDrawImageIndex, shapes
  } = state;

  return (
    <Collapse
      bordered={false}
      expandIconPosition="left"
      defaultActiveKey={['file', 'label']}
    >
      <Panel
        key="file"
        header={`文件列表 (${imageFiles.length})`}
        collapsible="header"
        extra={<FileListSetting />}
      >
        <FileList />
      </Panel>
      <Panel
        key="label"
        header={selDrawImageIndex !== null
          ? `标签列表 (${shapes[selDrawImageIndex].length})` : '标签列表 (0)'}
        collapsible="header"
        extra={<LabelListSetting />}
      >
        <LabelList />
      </Panel>
    </Collapse>
  );
}

export default RightToolbar;
