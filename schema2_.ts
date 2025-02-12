// Create DateUtil with following implementation

import { TimeUnit } from "./schema";

/*
## Práce s datumy

// Pamatujte: Nechte GitHub Copilot vás vést při implementaci, ale kriticky přemýšlejte o jeho návrzích. Cílem je pochopit, jak efektivně komunikovat své požadavky pro dosažení nejlepších výsledků.

## Business kontext

//Náš tým potřebuje robustní utilitu pro práci s datumy ke standardizaci datových operací napříč našimi aplikacemi. Obdrželi jsme několik požadavků od různých týmů na zpracování různých operací souvisejících s datumy a chceme je konsolidovat do jediné, dobře zdokumentované utility.

## Počáteční požadavek

Vytvořte třídu DateUtil, která bude sloužit jako naše centrální utilita pro práci s datumy. Začněte se základními operacemi a postupně přidávejte složitější funkce podle potřeb našich týmů.

## Úroveň 1: Základní operace s datumy

"Jako vývojář potřebuji provádět základní formátování a parsování datumů, abych mohl standardizovat práci s datumy napříč naší aplikací."

### Poznámky k implementaci:

- Vytvořte třídu DateUtil
- Implementujte funkcionalitu formátování datumů
- Přidejte možnosti parsování datumů
- Podpora běžných vzorů formátu datumu
- Zvažte ošetření chyb pro neplatné vstupy

### Očekávané chování:

```jsx
// Příklad použití, kterého chceme dosáhnout
const formattedDate = DateUtil.formatDate(new Date(), 'YYYY-MM-DD');
const parsedDate = DateUtil.parseDate('2024-03-10', 'YYYY-MM-DD');
```

*/



enum TimeUnit {
    DAYS = 'days',
    MONTHS = 'months',
    YEARS = 'years',
    MINUTES = 'minutes',
    HOURS = 'hours',
    WEEKS = 'weeks'
}
//
class DateUtil {
    /**
     * Formátuje Date objekt na řetězec podle zadaného formátu a časové zóny
     * @param date - Datum k formátování
     * @param format - Formátovací řetězec
     * @param timeZone - Volitelná časová zóna (např. 'Europe/Prague', 'UTC')
     */
    static formatDate(date: Date, format: string, timeZone?: string): string {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Neplatné datum');
        }

        try {
            if (timeZone) {
                const formatter = new Intl.DateTimeFormat('cs-CZ', {
                    timeZone,
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                });

                const parts = formatter.formatToParts(date);
                const values = parts.reduce((acc, part) => {
                    acc[part.type] = part.value;
                    return acc;
                }, {} as Record<string, string>);

                switch (format) {
                    case 'YYYY-MM-DD':
                        return `${values.year}-${values.month}-${values.day}`;
                    case 'DD.MM.YYYY':
                        return `${values.day}.${values.month}.${values.year}`;
                    case 'DD.MM.YYYY HH:mm:ss':
                        return `${values.day}.${values.month}.${values.year} ${values.hour}:${values.minute}:${values.second}`;
                    // ...existing formats...
                }
            }

            // Původní implementace pro lokální čas
            const year = date.getFullYear();
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const day = ('0' + date.getDate()).slice(-2);
            const hours = ('0' + date.getHours()).slice(-2);
            const minutes = ('0' + date.getMinutes()).slice(-2);
            const seconds = ('0' + date.getSeconds()).slice(-2);

            // Podporované formáty
            switch (format) {
                case 'YYYY-MM-DD':
                    return `${year}-${month}-${day}`;
                case 'DD.MM.YYYY':
                    return `${day}.${month}.${year}`;
                case 'MM/DD/YYYY':
                    return `${month}/${day}/${year}`;
                case 'YYYY-MM-DD HH:mm':
                    return `${year}-${month}-${day} ${hours}:${minutes}`;
                case 'DD.MM.YYYY HH:mm:ss':
                    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
                default:
                    throw new Error('Unsupported format');
            }
        } catch (error) {
            console.error('Chyba při formátování:', error);
            throw error;
        }
    }

    /**
     * Přidá zadaný počet jednotek k datu
     */
    static addTime(date: Date, amount: number, unit: TimeUnit): Date {
        const result = new Date(date);
        try {
            switch (unit) {
                case TimeUnit.DAYS:
                    result.setDate(result.getDate() + amount);
                    break;
                case TimeUnit.MONTHS:
                    result.setMonth(result.getMonth() + amount);
                    break;
                case TimeUnit.YEARS:
                    result.setFullYear(result.getFullYear() + amount);
                    break;
                default:
                    throw new Error('Nepodporovaná časová jednotka');
            }
            return result;
        } catch (error) {
            console.error('Chyba při přidávání času:', error);
            throw error;
        }
    }

    /**
     * Převede datum mezi časovými zónami
     * @param date - Datum k převodu
     * @param fromZone - Zdrojová časová zóna
     * @param toZone - Cílová časová zóna
     */
    static convertTimeZone(date: Date, fromZone: string, toZone: string): Date {
        try {
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: fromZone,
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });
            
            const fromTime = formatter.format(date);
            const utcDate = new Date(fromTime);
            
            formatter.format = toZone;
            return new Date(formatter.format(utcDate));
        } catch (error) {
            console.error('Chyba při převodu časové zóny:', error);
            throw error;
        }
    }
}

// Testovací scénáře
try {
    console.log('=== Základní práce s datumy ===');
    const today = new Date();
    console.log('Aktuální datum (YYYY-MM-DD):', DateUtil.formatDate(today, 'YYYY-MM-DD'));
    console.log('Aktuální datum a čas:', DateUtil.formatDate(today, 'DD.MM.YYYY HH:mm:ss'));

    console.log('\n=== Výpočty s datumy ===');
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    console.log('Začátek měsíce:', DateUtil.formatDate(startOfMonth, 'DD.MM.YYYY'));
    
    const nextWeek = DateUtil.addTime(today, 7, TimeUnit.DAYS);
    console.log('Za týden:', DateUtil.formatDate(nextWeek, 'DD.MM.YYYY'));

    console.log('\n=== Pokročilé použití ===');
    const oldDate = new Date(Date.now() - 3600000); // 1 hodina zpět
    console.log('Před hodinou:', DateUtil.formatDate(oldDate, 'DD.MM.YYYY HH:mm:ss'));


    console.log('=== Testování časových zón ===');
    console.log('Lokální čas:', 
        DateUtil.formatDate(today, 'DD.MM.YYYY HH:mm:ss'));
    
    console.log('UTC:', 
        DateUtil.formatDate(today, 'DD.MM.YYYY HH:mm:ss', 'UTC'));
    
    console.log('Praha:', 
        DateUtil.formatDate(today, 'DD.MM.YYYY HH:mm:ss', 'Europe/Prague'));
    
    // Převod mezi časovými zónami
    const pragueToParis = DateUtil.convertTimeZone(
        today,
        'Europe/Prague',
        'Europe/Paris'
    );
    
    console.log('Převod Praha -> Paříž:', 
        DateUtil.formatDate(pragueToParis, 'DD.MM.YYYY HH:mm:ss', 'Europe/Paris'));

} catch (error) {
    console.error('Chyba při testování:', error);
}
export class DateUtilMain {
    static formatDate(date: Date, format: string): string {
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);

        switch (format) {
            case 'YYYY-MM-DD':
                return `${year}-${month}-${day}`;
            default:
                throw new Error('Unsupported format');
        }
    }

    static parseDate(dateString: string, format: string): Date {
        const [year, month, day] = dateString.split('-').map(Number);
        if (format === 'YYYY-MM-DD') {
            return new Date(year, month - 1, day);
        } else {
            throw new Error('Unsupported format');
        }
    }

    static addTime(date: Date, amount: number, unit: TimeUnit): Date {
        const result = new Date(date);
        switch (unit) {
            case TimeUnit.DAYS:
                result.setDate(result.getDate() + amount);
                break;
            case TimeUnit.MONTHS:
                result.setMonth(result.getMonth() + amount);
                break;
            case TimeUnit.YEARS:
                result.setFullYear(result.getFullYear() + amount);
                break;
            default:
                throw new Error('Invalid time unit');
        }
        return result;
    }

    static subtractTime(date: Date, amount: number, unit: TimeUnit): Date {
        return this.addTime(date, -amount, unit);
    }

    static getDateDiff(date1: Date, date2: Date, unit: TimeUnit): number {
        const diffMs = Math.abs(date2.getTime() - date1.getTime());
        switch (unit) {
            case TimeUnit.DAYS:
                return Math.floor(diffMs / (1000 * 60 * 60 * 24));
            case TimeUnit.MONTHS:
                return (date2.getFullYear() - date1.getFullYear()) * 12
                    + (date2.getMonth() - date1.getMonth());
            case TimeUnit.YEARS:
                return date2.getFullYear() - date1.getFullYear();
            default:
                throw new Error('Invalid time unit');
        }
    }

    static compare(date1: Date, date2: Date): number {
        return date1.getTime() - date2.getTime();
    }
    static isWithinRange(targetDate: Date, startDate: Date, endDate: Date): boolean {
        return this.compare(targetDate, startDate) >= 0 &&
            this.compare(targetDate, endDate) <= 0;
    }

    static formatRelativeTime(date: Date): string {
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMinutes = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const diffWeeks = Math.floor(diffDays / 7);
        const diffMonths = this.getDateDiff(date, now, TimeUnit.MONTHS);
        const diffYears = this.getDateDiff(date, now, TimeUnit.YEARS);

        if (diffMinutes < 1) return 'just now';
        if (diffMinutes < 60) return `${diffMinutes} minutes ago`;
        if (diffHours < 24) return `${diffHours} hours ago`;
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffWeeks < 4) return `${diffWeeks} weeks ago`;
        if (diffMonths < 12) return `${diffMonths} months ago`;
        return `${diffYears} years ago`;
    }
}



//toto je jenom testovací část
