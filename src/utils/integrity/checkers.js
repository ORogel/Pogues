import { SET_ACTIVE_COMPONENTS, SET_ACTIVE_VARIABLES } from 'actions/app-state';
import {
  CREATE_COMPONENT,
  UPDATE_COMPONENT,
  REMOVE_COMPONENT,
  MOVE_COMPONENT,
  DUPLICATE_COMPONENT,
} from 'actions/component';
import combineCheckers from './combine-checkers';
import checkerQuestionnaireLength from './checker-questionnaire-length';
import checkerComponentTarget from './checker-component-targets';
import checkerUniqueCollectedVariableName from './checker-unique-collected-variable-name';
import checkerUniqueComponentName from './checker-unique-component-name';
import checkerTargetMode from './checker-declaration-mode';

export default {
  [SET_ACTIVE_COMPONENTS]: combineCheckers(
    checkerQuestionnaireLength,
    checkerComponentTarget,
    checkerUniqueComponentName,
    checkerTargetMode,
  ),
  [SET_ACTIVE_VARIABLES]: combineCheckers(checkerUniqueCollectedVariableName),
  [CREATE_COMPONENT]: combineCheckers(
    checkerQuestionnaireLength,
    checkerUniqueCollectedVariableName,
    checkerUniqueComponentName,
    checkerTargetMode,
  ),
  [UPDATE_COMPONENT]: combineCheckers(
    checkerComponentTarget,
    checkerTargetMode,
    checkerUniqueCollectedVariableName,
    checkerUniqueComponentName,
  ),
  [REMOVE_COMPONENT]: combineCheckers(
    checkerQuestionnaireLength,
    checkerTargetMode,
    checkerComponentTarget,
    checkerUniqueComponentName,
    checkerUniqueCollectedVariableName,
  ),
  [MOVE_COMPONENT]: combineCheckers(checkerComponentTarget),
  [DUPLICATE_COMPONENT]: combineCheckers(
    checkerComponentTarget,
    checkerTargetMode,
    checkerUniqueCollectedVariableName,
    checkerUniqueComponentName,
  ),
  '@@redux-form/DESTROY': combineCheckers(
    checkerComponentTarget,
    checkerUniqueCollectedVariableName,
  ),
};
