import React, { SFC } from 'react'
import { Typography, Button } from 'antd'
import { Link } from 'react-router-dom'

const { Title, Paragraph } = Typography

import './Exception.less'

type Prop = { content: string; title: string }

const Exception: SFC<Prop> = props => {
  const { title, content } = props
  return (
    <div>
      <Title>{title}</Title>
      <Paragraph>{content}</Paragraph>
      <Link to="/">
        <Button>回到首页</Button>
      </Link>
    </div>
  )
}

export default Exception
