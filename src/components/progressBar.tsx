import * as React from "react";
import styled from "styled-components";

import Container from 'react-bootstrap/Container';

const ProgressBar = styled.div`
    height: 60px;
    width: 700px;
    border-radius: 15px;
    border: 1px solid #333;
    position: relative;
    margin: auto;
    min-width: 300px;
`;

const ProgressBarDark = styled.div`
    height: 60px;
    width: 700px;
    border-radius: 15px;
    border: 1px solid #fff;
    position: relative;
    margin: auto;
    min-width: 300px;
`;

const SubTaskProgressBar16 = styled.div`
    height: 48px;
    position: relative;
    margin: 0;
`;

const PercentageText16 = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 16px;
    z-index: 10;
`;

const SubTaskProgressBar24 = styled.div`
    height: 73px;
    position: relative;
    margin: 0;
`;

const PercentageText24 = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 24px;
    z-index: 10;
`;

const SubTaskProgressBar32 = styled.div`
    height: 98px;
    position: relative;
    margin: 0;
`;

const PercentageText32 = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 32px;
    z-index: 10;
`;

const SubTaskProgressBar40 = styled.div`
    height: 122px;
    position: relative;
    margin: 0;
`;

const PercentageText40 = styled.div`
    position: absolute;
    bottom: 0px;
    right: 10px;
    font-size: 40px;
    z-index: 10;
`;

const ProgressBarFilling = styled.div`
    background: ${(props: IFillingProps) => props.color};
    height: 100%;
    border-radius: inherit;
    width: ${(props: IFillingProps) => props.percentage}%;
    z-index: 0;
`;

interface IFillingProps {
    percentage: string;
    color: string;
}

interface IProgressBarProps {
    percentage: number;
    isTaskButton?: boolean;
    theme: string;
    fontSize: number;
}

// ProgressBar takes in the percentage completion as a number and renders the
// progressbar.
export class TaskProgressBar extends React.Component<IProgressBarProps> {
    theme: string;

    constructor(props: IProgressBarProps) {
        super(props);
    }

    public render() {
        const color = this.determineColor();
        const progress = Math.round(this.props.percentage);
        if(this.props.fontSize === 16){
            if (this.props.isTaskButton) {
                return (
                    <SubTaskProgressBar16>
                        <ProgressBarFilling percentage={this.props.percentage.toString()} color={color} />
                        <PercentageText16>{progress}%</PercentageText16>
                    </SubTaskProgressBar16>
                );

            } else {
                if(this.props.theme === "light"){
                    return (
                        <Container>
                            <ProgressBar>
                                <ProgressBarFilling percentage={this.props.percentage.toString()} color={color} />
                                <PercentageText16>{progress}%</PercentageText16>
                            </ProgressBar>
                        </Container>
                    );
                } else {
                    return (
                        <Container>
                            <ProgressBarDark>
                                <ProgressBarFilling percentage={this.props.percentage.toString()} color={color} />
                                <PercentageText16>{progress}%</PercentageText16>
                            </ProgressBarDark>
                        </Container>
                    );
                }
            }

        } else if(this.props.fontSize === 24){
            if (this.props.isTaskButton) {
                return (
                    <SubTaskProgressBar24>
                        <ProgressBarFilling percentage={this.props.percentage.toString()} color={color} />
                        <PercentageText24>{progress}%</PercentageText24>
                    </SubTaskProgressBar24>
                );

            } else {
                if(this.props.theme === "light"){
                    return (
                        <Container>
                            <ProgressBar>
                                <ProgressBarFilling percentage={this.props.percentage.toString()} color={color} />
                                <PercentageText24>{progress}%</PercentageText24>
                            </ProgressBar>
                        </Container>
                    );
                } else {
                    return (
                        <Container>
                            <ProgressBarDark>
                                <ProgressBarFilling percentage={this.props.percentage.toString()} color={color} />
                                <PercentageText24>{progress}%</PercentageText24>
                            </ProgressBarDark>
                        </Container>
                    );
                }
            }

        } else if(this.props.fontSize === 32){
            if (this.props.isTaskButton) {
                return (
                    <SubTaskProgressBar32>
                        <ProgressBarFilling percentage={this.props.percentage.toString()} color={color} />
                        <PercentageText32>{progress}%</PercentageText32>
                    </SubTaskProgressBar32>
                );

            } else {
                if(this.props.theme === "light"){
                    return (
                        <Container>
                            <ProgressBar>
                                <ProgressBarFilling percentage={this.props.percentage.toString()} color={color} />
                                <PercentageText32>{progress}%</PercentageText32>
                            </ProgressBar>
                        </Container>
                    );
                } else {
                    return (
                        <Container>
                            <ProgressBarDark>
                                <ProgressBarFilling percentage={this.props.percentage.toString()} color={color} />
                                <PercentageText32>{progress}%</PercentageText32>
                            </ProgressBarDark>
                        </Container>
                    );
                }
            }

        } else {
            if (this.props.isTaskButton) {
                return (
                    <SubTaskProgressBar40>
                        <ProgressBarFilling percentage={this.props.percentage.toString()} color={color} />
                        <PercentageText40>{progress}%</PercentageText40>
                    </SubTaskProgressBar40>
                );

            } else {
                if(this.props.theme === "light"){
                    return (
                        <Container>
                            <ProgressBar>
                                <ProgressBarFilling percentage={this.props.percentage.toString()} color={color} />
                                <PercentageText40>{progress}%</PercentageText40>
                            </ProgressBar>
                        </Container>
                    );
                } else {
                    return (
                        <Container>
                            <ProgressBarDark>
                                <ProgressBarFilling percentage={this.props.percentage.toString()} color={color} />
                                <PercentageText40>{progress}%</PercentageText40>
                            </ProgressBarDark>
                        </Container>
                    );
                }
            }

        }
    }

    // Currently hardcoded colors, number ranges are up to debate.
    private determineColor = () => {
        const percentage = this.props.percentage;
        let color = "#8cde88";
        if(this.props.theme === "light") {
            if (percentage < 15) {
                color = "#d50000";
            } else if (percentage < 35) {
                color = "#f09300";
            } else if (percentage < 55) {
                color = "#f2d555";
            } else if (percentage < 80) {
                color = "#c0ca33";
            }
        } else {
            if (percentage < 15) {
                color = "#aa1b29";
            } else if (percentage < 35) {
                color = "#866709";
            } else if (percentage < 55) {
                color = "#b9a600";
            } else if (percentage < 80) {
                color = "#777720";
            } else {
                color = "#28a745";
            }
        }
        return color;
    }
}
