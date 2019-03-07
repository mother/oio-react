import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect'
import serializer from 'jest-emotion'

// To show emotion styles in snapshot tests
expect.addSnapshotSerializer(serializer)
