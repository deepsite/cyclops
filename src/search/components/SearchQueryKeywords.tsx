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

// Vendor
import * as React from 'react';
import * as classnames from 'classnames';

// Local
import { KeywordParameter } from '../types/Search';
import { Collapsible } from '../../common/components/Collapsible';
import { ErrorIcon } from '../../common/components/ErrorIcon';

// Types
// --------------------------------------------------------------------------

// Properties of the SearchQueryKeywords component.
interface Props {
  keywords: KeywordParameter[];
}

// Component
// --------------------------------------------------------------------------

// Displays information on a search query's keyword parameters.
export class SearchQueryKeywords extends React.Component<Props, {}> {
  render() {
    let containsError = false;
    const keywords = this.props.keywords.map((parameter) => {
      const classes = classnames({
        'alert-text--high': !!parameter.errors.length,
      });

      if (parameter.errors.length) { containsError = true; }

      return <li key={parameter.index} className={classes}>"{parameter.keyword}"</li>;
    });
    const header = (
      <span>
        Keywords {this.props.keywords.length}{' '}
        {containsError ? <ErrorIcon /> : null}
      </span>
    );

    return (
      <Collapsible descriptor={header} open={false}>
        <ul className="list--unstyled">{keywords}</ul>
      </Collapsible>
    );
  }
}