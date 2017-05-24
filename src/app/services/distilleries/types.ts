/**
 * The contents of this file are subject to the CYPHON Proprietary Non-
 * Commercial Registered User Use License Agreement (the "Agreement”). You
 * may not use this file except in compliance with the Agreement, a copy
 * of which may be found at https://github.com/dunbarcyber/cyclops/. The
 * developer of the CYPHON technology and platform is Dunbar Security
 * Systems, Inc.
 *
 * The CYPHON technology or platform are distributed under the Agreement on
 * an “AS IS” basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the Agreement for specific terms.
 *
 * Copyright (C) 2017 Dunbar Security Solutions, Inc. All Rights Reserved.
 *
 * Contributor/Change Made By: ________________. [Only apply if changes
 * are made]
 */

// Local
import { Container } from '../containers/types';
import { ContextNested } from '../../services/contexts/types';

/** Distillery object returned from the Cyphon API. */
export interface Distillery {
  /** Identifier of the distillery object. */
  id: number;
  /** Name of the distillery. */
  name: string;
  /** Container associated with the distillery. */
  container: Container | number;
  /** Contexts associated with the distillery. */
  contexts: ContextNested[] | number[];
}

/** Distillery object with associated objects nested on the object. */
export interface DistilleryNested extends Distillery {
  /** Contaienr object associated with the distillery. */
  container: Container;
  /** Context objects associated with the distillery. */
  contexts: ContextNested[];
}

/** Distillery object with associated objects represented with their ID's. */
export interface DistilleryFlat extends Distillery {
  /** ID of the container associated with the distillery. */
  container: number;
  /** ID's of the context objects assocated with the distillery. */
  contexts: number[];
}
