/**
 * Utility class for date and time operations with internationalization support.
 * Provides methods for date formatting, relative time calculations, range checking,
 * and timezone conversions.
 * 
 * @remarks //
 * This class uses the Intl API for locale-aware date formatting and calculations.
 * All methods are static and don't require class instantiation.
 * 
 * @example
 * ```typescript
 * // Format current date in Czech locale
 * const now = new Date();
 * const formatted = DateUtil.formatDate(now); // Returns full date and time in Czech format
 * 
 * // Get relative time
 * const hourAgo = new Date(Date.now() - 3600000);
 * const relative = DateUtil.timeAgo(hourAgo); // Returns "před hodinou" in Czech
 * ```
 */
class DateUtil {
    /**
     * Formats a date according to the specified locale and timezone.
     * 
     * @param date - The date to format
     * @param locale - The locale to use for formatting (defaults to 'cs-CZ')
     * @param timeZone - The timezone to use (defaults to 'Europe/Prague')
     * @returns A formatted string representation of the date
     */
    static formatDate(date: Date, locale?: string, timeZone?: string): string;

    /**
     * Calculates and returns a relative time string (e.g., "2 hours ago").
     * 
     * @param date - The date to calculate relative time from
     * @param locale - The locale to use for formatting (defaults to 'cs-CZ')
     * @returns A localized string representing relative time
     */
    static timeAgo(date: Date, locale?: string): string;

    /**
     * Checks if a target date falls within a specified date range.
     * 
     * @param targetDate - The date to check
     * @param startDate - The start of the date range
     * @param endDate - The end of the date range
     * @returns True if the target date is within the range, false otherwise
     */
    static isWithinRange(targetDate: Date, startDate: Date, endDate: Date): boolean;

    /**
     * Converts a date from one timezone to another.
     * 
     * @param date - The date to convert
     * @param fromZone - The source timezone
     * @param toZone - The target timezone
     * @returns A new Date object adjusted to the target timezone
     */
    static convertTimeZone(date: Date, fromZone: string, toZone: string): Date;
}

/**
 * Enumeration of time units used in date calculations.
 * 
 * @enum {string}
 */
enum TimeUnit {
    /** Minutes time unit */
    MINUTES = 'minutes',
    /** Hours time unit */
    HOURS = 'hours',
    /** Days time unit */
    DAYS = 'days',
    /** Weeks time unit */
    WEEKS = 'weeks',
    /** Months time unit */
    MONTHS = 'months',
    /** Years time unit */
    YEARS = 'years'
}
try {
    // Test formátování data
    const now = new Date();
    console.log('Aktuální datum a čas:');
    console.log('- České formátování:', DateUtil.formatDate(now));
    console.log('- Anglické formátování:', DateUtil.formatDate(now, 'en-US'));
    console.log('- Německé formátování:', DateUtil.formatDate(now, 'de-DE'));

    // Test relativního času
    const hourAgo = new Date(Date.now() - 3600000);
    const dayAgo = new Date(Date.now() - 86400000);
    console.log('\nRelativní časy:');
    console.log('- Hodina zpět:', DateUtil.timeAgo(hourAgo));
    console.log('- Den zpět:', DateUtil.timeAgo(dayAgo));

    // Test rozsahu datumů
    const targetDate = new Date('2024-03-15');
    const startDate = new Date('2024-03-01');
    const endDate = new Date('2024-03-31');
    console.log('\nKontrola rozsahu:');
    console.log('Datum je v rozsahu:', 
        DateUtil.isWithinRange(targetDate, startDate, endDate));

    // Test převodu časových zón
    const pragueToParis = DateUtil.convertTimeZone(
        now,
        'Europe/Prague',
        'Europe/Paris'
    );
    console.log('\nPřevod časových zón:');
    console.log('Praha:', DateUtil.formatDate(now));
    console.log('Paříž:', DateUtil.formatDate(pragueToParis, 'fr-FR', 'Europe/Paris'));

} catch (error) {
    console.error('Chyba:', error);
}