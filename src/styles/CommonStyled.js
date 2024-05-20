import { css } from "styled-components";
import { inter_lat_font } from "@/utils/Styles/Fonts";

export const baseTextStyles = css`
  font-family: ${inter_lat_font.style.fontFamily ||
  "Arial, Helvetica, sans-serif"};
  color: #ddd;
`;

export const baseBoxStyles = css`
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 8px;
`;
