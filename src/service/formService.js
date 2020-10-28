export const getFieldValuesCloneWithoutErrorsForSection = fieldValues =>
  Object.keys(fieldValues).reduce((acc, fieldValueName) => {
    acc[fieldValueName] = { ...fieldValues[fieldValueName] };
    acc[fieldValueName].error = '';
    return acc;
  }, {});

export const focusOnFirstFieldValueNameWithError = fieldValues => {
  const firstFieldValueNameWithError = Object.keys(fieldValues).find(
    fieldValueName => fieldValues[fieldValueName].error
  );

  if (firstFieldValueNameWithError) {
    fieldValues[firstFieldValueNameWithError].ref.current.focus();
  }
};

export const mapErrorToFieldValues = (fieldValues, errors) => {
  const fieldValuesClone = { ...fieldValues };
  errors.forEach(error => {
    const fieldValueName = error.path[0];
    if (!fieldValues[fieldValueName].error) {
      fieldValuesClone[fieldValueName] = {
        ...fieldValuesClone[fieldValueName],
        error: error.message,
      };
    }
  });
  return fieldValuesClone;
};
