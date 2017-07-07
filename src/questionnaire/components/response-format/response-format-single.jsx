import React from 'react';
import { FormSection, Field } from 'redux-form';

import { DATATYPE_VIS_HINT } from 'constants/pogues-constants';
import { QUESTION_TYPE_ENUM } from 'constants/schema';
import ListRadioButtons from 'layout/forms/controls/list-radio-buttons';
import CodesListNewEdit from 'layout/widget/codes-list-new-edit';
import Dictionary from 'utils/dictionary/dictionary';

const { SINGLE_CHOICE } = QUESTION_TYPE_ENUM;
const { CHECKBOX, RADIO, DROPDOWN } = DATATYPE_VIS_HINT;

class ResponseFormatSingle extends FormSection {
  static selectorPath = `responseFormat.${SINGLE_CHOICE}`;
  static defaultProps = {
    name: SINGLE_CHOICE,
  };
  render() {
    const listVisHints = [
      {
        value: CHECKBOX,
        label: Dictionary.checkbox,
      },
      {
        value: RADIO,
        label: Dictionary.radio,
      },
      {
        value: DROPDOWN,
        label: Dictionary.dropdown,
      },
    ];

    return (
      <div>
        <div className="ctrl-checkbox">
          <label htmlFor="rf-single-mandatory">{Dictionary.mandatory}</label>
          <div>
            <Field name="mandatory" id="rf-single-mandatory" component="input" type="checkbox" />
          </div>
        </div>

        <Field name="visHint" component={ListRadioButtons} label={Dictionary.visHint} radios={listVisHints} required />

        <CodesListNewEdit />
      </div>
    );
  }
}

export default ResponseFormatSingle;
