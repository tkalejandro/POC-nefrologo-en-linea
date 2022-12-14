import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material';
import { languages } from '../../../../../i18n/i18n.constants';

const ToggleLanguage = (): JSX.Element => {
    const [language, setLanguage] = useState<string>(languages.es);

    const { i18n } = useTranslation();

    const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
        '& .MuiToggleButtonGroup-grouped': {
            margin: theme.spacing(0.5),
            border: 0,
            '&.Mui-disabled': {
                border: 0,
            },
            '&:not(:first-of-type)': {
                borderRadius: theme.shape.borderRadius,
            },
            '&:first-of-type': {
                borderRadius: theme.shape.borderRadius,
            },
        },
    }));

    const handleLanguage = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ): void => {
        if (newAlignment !== null) {
            setLanguage(newAlignment);      
        }
    };

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language])

    return (
        <Stack direction="row" spacing={4}>
            <StyledToggleButtonGroup
                value={language}
                exclusive
                onChange={handleLanguage}
                aria-label="text alignment"
                color="primary"
            >
                <ToggleButton value={languages.es} aria-label="Español">
                    {languages.es}
                </ToggleButton>
                <ToggleButton value={languages.en} aria-label="English">
                {languages.en}
                </ToggleButton>
            </StyledToggleButtonGroup>
        </Stack>
    );
}

export default ToggleLanguage