import React, { useContext } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneEarth } from 'react-syntax-highlighter/dist/styles/prism'
import { Button, NotificationContext, NotificationProvider, Text } from '../../../../src'
import style from '../style.less'

const NotificationPage = () => {
   const { showNotification } = useContext(NotificationContext)
   const handleShowNotification = () => {
      showNotification({ message: 'Hi there! We are real about the sun.' })
   }

   return (
         <div className={style.docs}>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="12" weight="medium">Notifications</Text>
                  <br />
                  <Text size="3" lineHeight="140%">
                     {/* eslint-disable max-len */}
                     Wooglemary
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <Text size="5" weight="medium">Being Real about the Sun</Text>
                  <br />
                  <Text size="2[a-e] 3[f]" lineHeight="140%">
                     {/* eslint-disable max-len */}
                     <Button name="Cucumber" onClick={handleShowNotification} />
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     Coming Soon to a Store Near You
                  </SyntaxHighlighter>
               </div>
            </div>
         </div>
   )
}

export default () => <NotificationProvider><NotificationPage /></NotificationProvider>
