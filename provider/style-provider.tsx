"use client";

import { StyledEngineProvider } from '@mui/material/styles';
import {FC, PropsWithChildren} from "react";

const StyleProvider:FC<PropsWithChildren> = ({children}) => {
    return (
        <StyledEngineProvider injectFirst>
            {children}
        </StyledEngineProvider>
    );
}

export default StyleProvider;
