import React from 'react'
import { Link } from 'react-router-dom'
import { CalendarOutlined } from '@ant-design/icons';
import { Button, Space, Avatar} from 'antd';

const AppointmentDetails = () => {
  return (
    <div className='p-3 pt-8'>
      <div className='px-20 py-6 rounded-lg flex justify-around items-center'>  
          <Avatar shape="square" size={64} icon={<CalendarOutlined />} />
          <Space direction="vertical">
          <h2 className='text-xl'>นัดหมาย</h2>
          <h3 className='text-sm text-yellow'>รอดำเนินการ</h3>
            
          </Space>
      </div>

      {/* รายละเอียด */}
      <div className='p-10'>
        <Space direction="vertical">
          <h1>000001</h1>
          <br/>
          <h1>ชื่อ - นามสกุล</h1>
          <h3>ชื่อสมมุติ1 นามสกุลสมมุติ1</h3>
          <br/>
          <h1>วันที่นัดหมาย</h1>
          <h3>วันที่ 17 มกราคม 2567 9:00</h3>
        </Space>
      </div>

      <div className='p-7 flex flex-col space-y-2'>
          <Link to={"/Appointment/PostponeAppointment"}><button className='bt-blue'>เลื่อนนัดหมาย</button></Link>
      </div>

    </div>

  )
}

export default AppointmentDetails