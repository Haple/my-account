import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import AddressSummary from '@vtex/address-form/lib/AddressSummary'
import AddressRules from '@vtex/address-form/lib/AddressRules'
import ContentBox from '../shared/ContentBox'

const AddressBox = ({ address, onEditClick, intl }) => {
  return (
    <ContentBox
      width="third"
      isCentered={true}
      lowerButton={intl.formatMessage({ id: 'commons.edit' })}
      onLowerButtonClick={onEditClick}
    >
      <div className="lighter black-40 flex flex-column items-center lh-copy pv4">
        <AddressRules
          country={address.country}
          fetch={country => import('@vtex/address-form/lib/country/' + country)}
        >
          <AddressSummary address={address} />
        </AddressRules>
      </div>
    </ContentBox>
  )
}

AddressBox.propTypes = {
  address: PropTypes.object,
  onEditClick: PropTypes.func,
  intl: intlShape.isRequired,
}

export default injectIntl(AddressBox)
