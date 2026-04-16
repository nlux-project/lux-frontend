import {IRelatedListEntryTransformed} from '../../../types/IRelatedLists'
import {IBase} from '../../../types/ISearchEstimates'
import {IOrderedItems} from '../../../types/ISearchResults'

import {getCriteriaFromHalLink, getScopeFromHalLink} from './halLinkHelper'

export const transformRelatedListResults = (
    results: Array<IOrderedItems>,
    ): IRelatedListEntryTransformed|null => {
  const transformedData = {} as IRelatedListEntryTransformed
  results.map((result: IOrderedItems) => {
    const {value, name, totalItems, first} = result
    const {id} = first as IBase
    // get criteria and scope from first
    const criteria = getCriteriaFromHalLink(id, 'search')
    const scope = getScopeFromHalLink(id)

    // Only if the related entity is not an item
    if (value !== undefined) {
      if (!Object.prototype.hasOwnProperty.call(transformedData, value)) {
        transformedData[value] = {}
      }

      if (!Object.prototype.hasOwnProperty.call(
              transformedData[value] ?? {}, scope)) {
        transformedData[value][scope] = {
          relations: {},
        }
      }

      if (!Object.prototype.hasOwnProperty.call(
              transformedData[value][scope] ?? {}, 'criteria')) {
        transformedData[value][scope].criteria = {
          OR: [criteria],
        }
      } else {
        transformedData[value][scope].criteria.OR.push(criteria)
      }

      transformedData[value][scope].relations[name as string] = {
        totalItems,
        criteria,
      }
    }

    return null
  })

  if (Object.keys(transformedData).length === 0) {
    return null
  }

  return transformedData
}
