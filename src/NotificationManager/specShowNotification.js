export default [{
   name: 'message',
   type: 'String',
   default: '-',
   description: 'Notification\'s body text right below the <code>title</code>',
   responsive: false
}, {
   name: 'title',
   type: 'String',
   default: '-',
   description: 'Primary text heading for the notification',
   responsive: false
}, {
   name: 'type',
   type: 'String (Enum)',
   default: '-',
   description: 'Available values include: <code>info</code>,<code>loading</code>, <code>success</code>, <code>warning</code> and <code>error</code>',
   responsive: false
}]
