'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
/* import CardActions from '@mui/material/CardActions'; */
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import type { SxProps } from '@mui/material/styles';
import { ArrowClockwise as ArrowClockwiseIcon } from '@phosphor-icons/react/dist/ssr/ArrowClockwise';
/* import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight'; */

/* 
import { Chart } from '@/components/core/chart'; */

export interface SalesProps {
  chartSeries: { name: string; data: number[] }[];
  sx?: SxProps;
}

export function Sales({ sx }: SalesProps): React.JSX.Element {

  return (
    <Card sx={sx}>
      <CardHeader
        action={
          <Button color="inherit" size="small" startIcon={<ArrowClockwiseIcon fontSize="var(--icon-fontSize-md)" />}>
            Sync
          </Button>
        }
        title="bPAP"
      />
      <CardContent>
      <iframe title="bpap" width="1400" height="550" frameBorder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=1CCA559729EF366B%21113&authkey=%21AGigT-s-2TBUfyc&em=2&AllowTyping=True&ActiveCell='User'!P1&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True" />
      </CardContent>
      <Divider />
     {/*  <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button color="inherit" endIcon={<ArrowRightIcon fontSize="var(--icon-fontSize-md)" />} size="small">
          Overview
        </Button>
      </CardActions> */}
    </Card>
  );
}

