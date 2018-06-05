import glamorous from "glamorous-native";
import { colors } from "../../assets/colors";
import { globalStyles } from "../../assets/globalStyles";

const { paddings, fontWeights } = globalStyles;



export const HeaderContainer = glamorous.touchableOpacity(
  ({}) => ({
    width: "100%",
    height: 200,
    justifyContent: 'center',
    backgroundColor: colors.primary
  })
);
export const HeaderText = glamorous.text(({ textColor, textWeight }) => ({
  color: textColor ? colors[textColor] : colors.white,
  fontSize: 24,
  fontWeight: textWeight ? fontWeights[textWeight] : fontWeights.md,
  textAlign: 'center'
}));

  export const MenuItem = glamorous.text(({ textColor, textWeight }) => ({
    color: textColor ? colors[textColor] : colors.primary,
    fontSize: 14,
    fontWeight: textWeight ? fontWeights[textWeight] : fontWeights.md,
    padding:paddings.sm,
    backgroundColor: colors.white
  }));