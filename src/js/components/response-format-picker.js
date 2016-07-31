import React, { PropTypes } from 'react'
import _ from 'lodash'
import {
  RESPONSE_FORMAT as resFormatMap
} from '../utils/constants-mapping'


export default function ResponseFormatPicker(
  { type, types, select, locale }) {

  const typeChoices = _.map(types, typeName => (
      <option key={typeName} value={typeName}>
        { locale[resFormatMap[typeName]]}
      </option>
  ))

  return (
      <div className="col-sm-6">
        <select className="form-control" value={type}
          onChange={e => select(e.target.value)}>
          { typeChoices }
        </select>
      </div>
  )
}

ResponseFormatPicker.propTypes = {
  select: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  types: PropTypes.object.isRequired,
  locale: PropTypes.object.isRequired,
}