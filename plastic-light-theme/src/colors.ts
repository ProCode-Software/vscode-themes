import tinycolor from 'tinycolor2'

const setAlpha = (hex: string, alpha: number) =>
  tinycolor(hex).setAlpha(alpha).toHex8String().toUpperCase()

const brighten = (hex: string, percent: number) =>
  tinycolor(hex).brighten(percent).toHex8String().toUpperCase()

// const darken = (hex: string, percent: number) =>
//   tinycolor(hex).darken(percent).toHex8String().toUpperCase()

// const desaturate = (hex: string, percent: number) =>
//   tinycolor(hex).desaturate(percent).toHex8String().toUpperCase()

export const colors = (palette) => {
  const {
    bunker,
    cadetBlue,
    cornflowerBlue,
    dodgerBlue,
    fountainBlue,
    ghost,
    harvestGold,
    lavender,
    olivine,
    robRoy,
    shark,
    shuttleGray,
    sunglo,
    transparent,
    valencia,
    whiskey,
    white,
    woodsmoke,
    sungloDefault
  } = palette
  const cadetBlue10 = setAlpha(cadetBlue, 0.1)
  const cadetBlue20 = setAlpha(cadetBlue, 0.2)
  const shadow = setAlpha(brighten(cadetBlue, 40), 0.6)
  return {
    'activityBar.activeBorder': dodgerBlue,
    'activityBar.background': shark,
    'activityBar.border': bunker,
    'activityBar.foreground': ghost,
    'activityBar.inactiveForeground': brighten(cadetBlue, 20),

    'activityBarBadge.background': sungloDefault,
    'activityBarBadge.foreground': shark,

    'breadcrumb.focusForeground': ghost,
    'breadcrumb.foreground': shuttleGray,

    'button.background': sungloDefault,
    'button.foreground': shark,
    'button.hoverBackground': tinycolor(sunglo)
      .lighten(5)
      .toHexString()
      .toUpperCase(),
    'button.secondaryBackground': bunker,
    'button.secondaryForeground': white,

    'checkbox.background': cornflowerBlue,
    'checkbox.foreground': white,

    contrastBorder: bunker,

    'debugToolBar.background': woodsmoke,

    'diffEditor.border': bunker,
    'diffEditor.diagonalFill': bunker,
    'diffEditor.insertedLineBackground': setAlpha(brighten(olivine, 20), 0.05),
    'diffEditor.insertedTextBackground': setAlpha(brighten(olivine, 20), 0.1),
    'diffEditor.removedLineBackground': setAlpha(brighten(sunglo, 20), 0.05),
    'diffEditor.removedTextBackground': setAlpha(brighten(sunglo, 20), 0.1),

    'dropdown.background': woodsmoke,
    'dropdown.border': bunker,

    'editor.background': shark,
    'editor.findMatchBackground': transparent,
    'editor.findMatchBorder': dodgerBlue,
    'editor.findMatchHighlightBackground': transparent,
    'editor.findMatchHighlightBorder': ghost,
    'editor.foreground': cadetBlue,
    'editor.lineHighlightBackground': setAlpha(shuttleGray, 0.06),
    'editor.lineHighlightBorder': transparent,
    'editor.linkedEditingBackground': bunker,
    'editor.rangeHighlightBorder': ghost,
    'editor.selectionBackground': setAlpha(shuttleGray, 0.1),
    'editor.selectionHighlightBackground': cadetBlue10,
    'editor.selectionHighlightBorder': ghost,
    'editor.wordHighlightBackground': transparent,
    'editor.wordHighlightBorder': dodgerBlue,
    'editor.wordHighlightStrongBackground': transparent,
    'editor.wordHighlightStrongBorder': dodgerBlue,

    'editorBracketHighlight.foreground1': shuttleGray,
    'editorBracketHighlight.foreground2': cornflowerBlue,
    'editorBracketHighlight.foreground3': harvestGold,
    'editorBracketHighlight.foreground4': sunglo,
    'editorBracketHighlight.foreground5': olivine,
    'editorBracketHighlight.foreground6': lavender,
    'editorBracketHighlight.unexpectedBracket.foreground': valencia,

    'editorBracketMatch.background': transparent,
    'editorBracketMatch.border': dodgerBlue,

    'editorCursor.foreground': cadetBlue,

    'editorError.foreground': valencia,

    'editorGroup.border': bunker,
    'editorGroup.emptyBackground': woodsmoke,

    'editorGroupHeader.tabsBackground': woodsmoke,

    'editorGutter.addedBackground': olivine,
    'editorGutter.deletedBackground': sunglo,
    'editorGutter.modifiedBackground': whiskey,

    'editorHoverWidget.background': woodsmoke,
    'editorHoverWidget.border': dodgerBlue,

    'editorIndentGuide.activeBackground1': setAlpha(cadetBlue, 0.2),
    'editorIndentGuide.background1': brighten(bunker, 2),

    'editorInfo.foreground': dodgerBlue,

    'editorInlayHint.background': transparent,
    'editorInlayHint.foreground': shuttleGray,

    'editorLightBulb.foreground': robRoy,

    'editorLightBulbAutoFix.foreground': dodgerBlue,

    'editorLineNumber.activeForeground': ghost,
    'editorLineNumber.foreground': brighten(shuttleGray, 20),

    'editorOverviewRuler.addedForeground': olivine,
    'editorOverviewRuler.border': bunker,
    'editorOverviewRuler.deletedForeground': sunglo,
    'editorOverviewRuler.errorForeground': valencia,
    'editorOverviewRuler.findMatchForeground': dodgerBlue,
    'editorOverviewRuler.infoForeground': dodgerBlue,
    'editorOverviewRuler.modifiedForeground': whiskey,
    'editorOverviewRuler.warningForeground': robRoy,

    'editorRuler.foreground': bunker,

    'editorStickyScroll.background': shark,
    'editorStickyScrollHover.background': woodsmoke,

    'editorSuggestWidget.background': woodsmoke,
    'editorSuggestWidget.border': dodgerBlue,
    'editorSuggestWidget.selectedBackground': cadetBlue10,

    'editorWarning.foreground': robRoy,

    'editorWhitespace.foreground': cadetBlue10,

    'editorWidget.background': woodsmoke,

    errorForeground: valencia,

    focusBorder: dodgerBlue,

    'gitDecoration.deletedResourceForeground': sunglo,
    'gitDecoration.ignoredResourceForeground': shuttleGray,
    'gitDecoration.modifiedResourceForeground': whiskey,
    'gitDecoration.untrackedResourceForeground': olivine,

    'input.background': bunker,

    'inputOption.activeBorder': dodgerBlue,

    'inputValidation.errorBackground': valencia,
    'inputValidation.errorBorder': valencia,
    'inputValidation.infoBackground': dodgerBlue,
    'inputValidation.infoBorder': dodgerBlue,
    'inputValidation.infoForeground': bunker,
    'inputValidation.warningBackground': robRoy,
    'inputValidation.warningBorder': robRoy,
    'inputValidation.warningForeground': bunker,

    'list.activeSelectionBackground': cadetBlue10,
    'list.activeSelectionForeground': white,
    'list.errorForeground': valencia,
    'list.focusBackground': cadetBlue10,
    'list.hoverBackground': setAlpha(cadetBlue, 0.06),
    'list.inactiveFocusOutline': shuttleGray,
    'list.inactiveSelectionBackground': cadetBlue20,
    'list.inactiveSelectionForeground': ghost,
    'list.warningForeground': robRoy,

    'minimap.findMatchHighlight': dodgerBlue,
    'minimap.selectionHighlight': ghost,

    'minimapGutter.addedBackground': olivine,
    'minimapGutter.deletedBackground': sunglo,
    'minimapGutter.modifiedBackground': whiskey,

    'notificationCenter.border': bunker,

    'notificationCenterHeader.background': woodsmoke,

    'notifications.background': woodsmoke,
    'notifications.border': bunker,

    'notificationToast.border': bunker,

    'panel.background': woodsmoke,
    'panel.border': bunker,

    'panelTitle.inactiveForeground': shuttleGray,

    'peekView.border': dodgerBlue,

    'peekViewEditor.background': woodsmoke,
    'peekViewEditor.matchHighlightBackground': cadetBlue20,

    'peekViewResult.background': woodsmoke,
    'peekViewResult.matchHighlightBackground': cadetBlue20,
    'peekViewResult.selectionBackground': cadetBlue10,
    'peekViewResult.selectionForeground': ghost,

    'peekViewTitle.background': woodsmoke,

    'sash.hoverBorder': cadetBlue20,

    'scrollbar.shadow': shadow,

    'scrollbarSlider.activeBackground': cadetBlue20,
    'scrollbarSlider.background': cadetBlue10,
    'scrollbarSlider.hoverBackground': cadetBlue20,

    'sideBar.background': woodsmoke,
    'sideBar.border': bunker,
    'sideBar.foreground': ghost,

    'sideBarSectionHeader.background': shark,

    'statusBar.background': shark,
    'statusBar.border': bunker,
    'statusBar.debuggingBackground': shark,
    'statusBar.debuggingBorder': fountainBlue,
    'statusBar.debuggingForeground': cadetBlue,
    'statusBar.focusBorder': cadetBlue,
    'statusBar.foreground': cadetBlue,
    'statusBar.noFolderBackground': woodsmoke,

    'statusBarItem.activeBackground': bunker,
    'statusBarItem.errorBackground': shark,
    'statusBarItem.errorForeground': valencia,
    'statusBarItem.focusBorder': cadetBlue,
    'statusBarItem.hoverBackground': woodsmoke,
    'statusBarItem.hoverForeground': cadetBlue,
    'statusBarItem.remoteBackground': shark,
    'statusBarItem.remoteForeground': lavender,
    'statusBarItem.warningBackground': shark,
    'statusBarItem.warningForeground': robRoy,

    'tab.activeBackground': shark,
    'tab.activeBorderTop': dodgerBlue,
    'tab.activeForeground': ghost,
    'tab.border': bunker,
    'tab.inactiveBackground': woodsmoke,
    'tab.inactiveForeground': shuttleGray,
    'tab.lastPinnedBorder': cadetBlue20,

    'terminal.ansiBlack': shuttleGray,
    'terminal.ansiBlue': cornflowerBlue,
    'terminal.ansiBrightBlack': shuttleGray,
    'terminal.ansiBrightBlue': cornflowerBlue,
    'terminal.ansiBrightCyan': fountainBlue,
    'terminal.ansiBrightGreen': olivine,
    'terminal.ansiBrightMagenta': lavender,
    'terminal.ansiBrightRed': sunglo,
    'terminal.ansiBrightWhite': cadetBlue,
    'terminal.ansiBrightYellow': harvestGold,
    'terminal.ansiCyan': fountainBlue,
    'terminal.ansiGreen': olivine,
    'terminal.ansiMagenta': lavender,
    'terminal.ansiRed': sunglo,
    'terminal.ansiWhite': cadetBlue,
    'terminal.ansiYellow': harvestGold,
    'terminal.foreground': cadetBlue,

    'titleBar.activeBackground': shark,
    'titleBar.activeForeground': ghost,
    'titleBar.border': bunker,
    'titleBar.inactiveBackground': shark,
    'titleBar.inactiveForeground': shuttleGray,

    'toolbar.hoverBackground': cadetBlue20,

    'widget.shadow': shadow,
  }
}