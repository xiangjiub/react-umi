import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import {Button} from 'antd';

export default () => (
  <PageContainer>
    <ProCard direction="column" ghost gutter={[0, 8]}>
      <ProCard layout="center" bordered={false}>
        <ProForm
          submitter={{
            // 配置按钮文本
            searchConfig: {
              resetText: '重置',
              submitText: '提交',
            },
            // 配置按钮的属性
            resetButtonProps: {
              style: {
                // 隐藏重置按钮
                display: 'none',
              },
            },
            submitButtonProps: {},

            // 完全自定义整个区域
            render: (props, doms) => {
              console.log(props);
              return [
                <Button type="default"  key="rest" onClick={() => props.form?.resetFields()}>
                  重置
                </Button>,
                <Button type="primary" ghost key="submit" onClick={() => props.form?.submit?.()}>
                  提交
                </Button>,
              ];
            },
          }}
        >
          <ProFormText name="project" width="md" label="项目名称" initialValue="xxxx项目" />
          <ProFormText width="xs" name="mangerName" label="商务经理" initialValue="启途" />
        </ProForm>
      </ProCard>
    </ProCard>
  </PageContainer>
);
